export async function generateMetadata({ params: { postId } }) {
  return { title: `Post number ${postId}` };
}

function page({ params: { postId } }) {
  return <div>post single {postId}</div>;
}

export default page;
