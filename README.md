# Resume Site

Astro로 만든 개인 이력서 사이트입니다. GitHub Pages 배포는 GitHub Actions로 자동화되어 있습니다.

## 로컬 실행

```bash
npm install
npm run dev
```

## 배포 방법

1. GitHub에서 새 저장소를 만듭니다.
   - 개인 주소 `https://<username>.github.io`로 쓰려면 저장소 이름을 `<username>.github.io`로 만드세요.
   - 다른 저장소 이름이면 주소는 `https://<username>.github.io/<repo>`가 됩니다.
2. 이 폴더를 해당 저장소에 push합니다.
3. GitHub 저장소의 `Settings > Pages > Build and deployment > Source`를 `GitHub Actions`로 설정합니다.
4. `main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 사이트를 빌드하고 배포합니다.

`astro.config.mjs`는 GitHub Actions의 `GITHUB_REPOSITORY` 값을 읽어 `site`와 `base`를 자동 계산합니다.
