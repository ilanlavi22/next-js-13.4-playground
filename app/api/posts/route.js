//Next. js supports the following HTTP methods:

// 1. **GET**; Retrieves data or resources from the server.
// 2. **POST**; Submits data to the server to create a new resource.
// 3. **PUT**: Updates or replaces an existing resource on the server.
// 4. **PATCH**: Partially updates an existing resource on the server.
// 5. **DELETE**; Removes a specific resource from the server.
// 6. **HEAD**; Retrieves the headers of a resource without fetching its body.
// 7. **OPTIONS**; Retrieves the supported HTTP methods and other communication
//options for a resource.

// export async function GET(request) {
//   return new Response('Hello, Next.js!');
// }

const posts = [
  { id: 1, title: 'post title', body: 'post content' },
  { id: 2, title: 'post 2 title is awesome', body: 'post 2 content' },
];

export async function GET(request) {
  return new Response(JSON.stringify(posts));
}
