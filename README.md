# 🙏 Resume
제 개인 포트폴리오입니다!

> 세상에 기여하는, 트렌디한 개발자를 꿈꿉니다.

## 🚀 Run
```bash
# 본 레포지토리를 클론합니다.
git clone https://github.com/junhoyeo/resume

# yarn을 이용해 의존성을 설치합니다.
yarn install

# 개발 서버를 실행합니다.
yarn run start

# 자동으로 빌드 후 gh-pages 브랜치로 배포합니다.
yarn run deploy
```

## 🎨 Styling conventions

### 타입스크립트

- [tslint-react](https://github.com/palantir/tslint-react)

- [tslint-config-prettier](https://github.com/prettier/tslint-config-prettier)와 [tslint-config-airbnb](https://github.com/progre/tslint-config-airbnb)를 순차적으로 적용합니다. 두 스타일이 겹치게 되면 `tslint-config-airbnb`가 우선적으로 적용됩니다.

### 커밋 메세지
[Karma git commit messages convention](http://karma-runner.github.io/4.0/dev/git-commit-msg.html)을 사용합니다.
