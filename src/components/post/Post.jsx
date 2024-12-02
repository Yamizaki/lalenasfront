

function Post({blogTitle, blogContent, blogAuthor, blogCategory, blogCreated}) {
  return (
    <div className="w-96">
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          className="h-56 w-full object-cover"
        />

        <div className="bg-gray-800 p-4 sm:p-6">
          <time
            dateTime="2022-10-10"
            className="block text-xs text-gray-500 dark:text-gray-400"
          >
            {blogAuthor} || {blogCreated}
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
              {blogTitle}
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            {blogContent}
          </p>
        </div>
      </article>
    </div>
  );
}

export default Post;
