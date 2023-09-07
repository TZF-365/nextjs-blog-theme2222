export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Principles of Wealth & Silver Tree Agency';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Client Relations Workshop';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'Thank you for reading and we look forward to seeing you at the workshop.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
