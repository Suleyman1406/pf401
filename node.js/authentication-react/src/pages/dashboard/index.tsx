import RenderIf from "@/components/shared/RenderIf";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppSelector } from "@/hooks/redux";
import {
  blockUser,
  deleteUser,
  getUsers,
  handleUserRoleChange,
  unblockUser,
} from "@/services/user";
import { selectUserData } from "@/store/features/userSlice";
import { User, UserRole } from "@/types";
import {
  BanIcon,
  CheckIcon,
  Edit2Icon,
  ShieldCheckIcon,
  ShieldXIcon,
  Trash2Icon,
} from "lucide-react";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  const getData = async () => {
    setIsLoading(true);
    const response = await getUsers();
    if (response.status === 200) {
      const { users } = response.data;
      setUsers(users);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <h1>Users</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Surname</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading
            ? new Array(5)
                .fill(0)
                .map((_, index) => <RowSkeleton key={index} />)
            : users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.surname}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    {user.isBlocked ? (
                      <ShieldXIcon className="text-red-700" />
                    ) : (
                      <ShieldCheckIcon className="text-green-700" />
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <RowActions user={user} syncData={getData} />
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </div>
  );
};

function RowActions({ user, syncData }: { user: User; syncData: () => void }) {
  const { user: currentUser } = useAppSelector(selectUserData);
  const isCurrentUserAdmin =
    currentUser?.role === UserRole.Admin ||
    currentUser?.role === UserRole.SuperAdmin;
  const isCurrentUserSuperAdmin = currentUser?.role === UserRole.SuperAdmin;
  const isUserSuperAdmin = user.role === UserRole.SuperAdmin;
  const isUserAdmin = user.role === UserRole.Admin;

  const blockCondition =
    !isUserSuperAdmin &&
    ((isUserAdmin && isCurrentUserSuperAdmin) ||
      (isCurrentUserAdmin && !isUserAdmin));

  async function handleToggleBlock() {
    const serviceAction = user.isBlocked ? unblockUser : blockUser;
    const response = await serviceAction(user.id);
    if (response.status === 200) {
      syncData();
    }
  }

  async function handleDelete() {
    const response = await deleteUser(user.id);
    if (response.status === 200) {
      syncData();
    }
  }
  async function handleRoleChange(
    role: Exclude<UserRole, UserRole.SuperAdmin>
  ) {
    const response = await handleUserRoleChange(user.id, role);
    if (response.status === 200) {
      syncData();
    }
  }

  return (
    <div className="flex gap-3 items-center">
      <RenderIf condition={isCurrentUserSuperAdmin && !isUserSuperAdmin}>
        <Button onClick={handleDelete} size={"icon"} variant={"outline"}>
          <Trash2Icon className="h-4 w-4" />
        </Button>
      </RenderIf>
      <RenderIf condition={blockCondition}>
        <Button onClick={handleToggleBlock} size={"icon"} variant={"outline"}>
          {user.isBlocked ? (
            <CheckIcon className="h-4 w-4 text-green-700" />
          ) : (
            <BanIcon className="h-4 w-4 text-red-700" />
          )}
        </Button>
      </RenderIf>
      <RenderIf condition={isCurrentUserSuperAdmin && !isUserSuperAdmin}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size={"icon"} variant={"outline"}>
              <Edit2Icon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>User Role</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => handleRoleChange(UserRole.Admin)}
              disabled={user.role === UserRole.Admin}
            >
              Admin
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleRoleChange(UserRole.User)}
              disabled={user.role === UserRole.User}
            >
              User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </RenderIf>
    </div>
  );
}

function RowSkeleton() {
  return (
    <TableRow>
      {[1, 2, 3, 4, 5, 6, 7].map((value) => (
        <TableCell key={value}>
          <Skeleton className="w-20 h-5" />
        </TableCell>
      ))}
    </TableRow>
  );
}

export default DashboardPage;
