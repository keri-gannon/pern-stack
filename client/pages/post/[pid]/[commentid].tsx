import { useRouter } from 'next/router';

const Comment = () => {
  const {
    query: { commentid },
  } = useRouter();

  return <div>comment:{commentid}</div>;
};

export default Comment;
