# Deployment Guide

## Deploying to Netlify

### Automatic Deployment (Recommended)

1. **Connect to Git Repository**

   - Push your code to GitHub/GitLab/Bitbucket
   - Connect your repository to Netlify
   - Netlify will automatically deploy on every push

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `build`
   - Node version: 18

### Manual Deployment

1. **Build the Project**

   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `build` folder to Netlify
   - Or use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --dir=build --prod
   ```

### Environment Variables

No environment variables are required for this project.

### Custom Domain

1. Go to your Netlify site settings
2. Navigate to "Domain management"
3. Add your custom domain
4. Configure DNS settings as instructed

### Troubleshooting

#### Content Security Policy Issues

If you see CSP errors:

1. Check the `netlify.toml` file has the correct CSP header
2. Ensure the `_redirects` file is in the `public` folder
3. Verify the build includes all static assets

#### Build Failures

1. Check Node.js version (should be 18+)
2. Clear npm cache: `npm cache clean --force`
3. Delete `node_modules` and reinstall: `npm install`

#### Routing Issues

1. Ensure `public/_redirects` file exists
2. Check that `netlify.toml` has the redirect rule
3. Verify the homepage field in `package.json`

### Performance Optimization

- Images are optimized during build
- CSS and JS are minified
- Assets are compressed with gzip
- CDN is automatically configured by Netlify

### Security

- CSP headers are configured in `netlify.toml`
- HTTPS is automatically enabled
- Security headers are set for protection

---

For support, check the Netlify documentation or contact the development team.
