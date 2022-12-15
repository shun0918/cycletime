# Getting Started

## Create `.env`

You can copy `.env.sample`.
```sh
cd /path/to/cycletime
cp .env.sample .env
```

You need a personal access token.
reference: Creating a personal access token - GitHub Docs https://docs.github.com/ja/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

Edit `.env`.
```
GITHUB_TARGET_REPOSITORY={owner}/{target-repository}
GITHUB_ACCESS_TOKEN=xxxxxxxxxxxx
```

## Run in Docker Compose
```
docker-compose up
```
