// api/blog/controllers/LikeController.js

module.exports = {
    async like(ctx) {
      const { id } = ctx.params;
  
      try {
        // Find the blog post by ID
        const blogPost = await strapi.services.blog.findOne({ id });
  
        if (!blogPost) {
          return ctx.notFound("Blog post not found");
        }
  
        // Increment the like count
        blogPost.likes = (blogPost.likes || 0) + 1;
  
        // Update the blog post in the database
        const updatedBlogPost = await strapi.blog.update({ id }, blogPost);
  
        return updatedBlogPost;
      } catch (error) {
        return ctx.badRequest("An error occurred while processing your request");
      }
    },
  };
  