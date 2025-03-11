import { useGetPostsQuery } from '../api/apiSlice';

const QueryConsumer = () => {
  const { data, error, isLoading } = useGetPostsQuery(undefined);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  console.log({ data });
  return (
    <>
      <h2>RTK Query Component</h2>
    </>
  );
};

export default QueryConsumer;
