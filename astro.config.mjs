import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY ?? '';
const [owner = 'username', repo = 'username.github.io'] = repository.split('/');
const isUserPage = repo === `${owner}.github.io`;

export default defineConfig({
  site: `https://${owner}.github.io`,
  base: isUserPage ? '/' : `/${repo}`,
});
