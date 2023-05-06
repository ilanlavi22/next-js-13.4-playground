// 1. Server Side Rendering (SSR)
// 2. Static Site Generation (SSG)
// 3. Incremental Static Generation (IRS)

async function Posts() {
  // SSG (default to caching)
  const res = await fetch(`http://localhost:3000/api/posts`);

  //SSR
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`,
  // {cache: 'no-store'}
  // );

  //ISR (combining SSR+SSG) not messing with the cache but providing a revalidation of the data)
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
  //   next: { revalidate: 10 },
  // });

  const posts = await res.json();
  return (
    <div>
      <h1 className='text-2xl py-5'>Posts</h1>
      {posts &&
        posts.map((post) => (
          <div key={post.id} className='py-5 border-t-2'>
            <h2 className=' font-bold'>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
}

export default Posts;
