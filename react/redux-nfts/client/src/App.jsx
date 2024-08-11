import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteNftAction, getNftsAction } from "./store/actions/nfts";
import { useSelector } from "react-redux";
import { selectNfts } from "./store/slices/nfts";

function App() {
  const dispatch = useDispatch();
  const {
    items: nfts,
    loading,
    error,
    totalCount,
    hasMore,
  } = useSelector(selectNfts);

  useEffect(() => {
    dispatch(getNftsAction({}));
  }, []);

  const loadMore = () => {
    if (!hasMore) return;
    dispatch(getNftsAction({ skip: nfts.length }));
  };

  const onDelete = (id) => {
    dispatch(deleteNftAction({ id }));
  };

  if (loading) {
    return "loading...";
  }
  if (error) {
    return error;
  }

  return (
    <>
      <h1>Nfts</h1>
      <h2>total count: {totalCount}</h2>
      {nfts.map((nft) => (
        <div key={nft.id} className="flex gap-3 my-3 items-center">
          <p>{nft.name}</p>
          <button
            onClick={() => onDelete(nft.id)}
            className="border border-b p-1 rounded-lg shadow-md"
          >
            delete
          </button>
        </div>
      ))}
      {hasMore && (
        <button
          onClick={loadMore}
          disabled={loading}
          className="disabled:opacity-50 hover:bg-red-300  border border-gray-300 p-2 m-5"
        >
          Load More
        </button>
      )}
    </>
  );
}

export default App;
