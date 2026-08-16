# Security Policy

## Reporting a Vulnerability

If you find a security vulnerability in CYIDE, please report it responsibly.

- Open a private security advisory in this repository, or
- Email the maintainer at `leopolds2010@gmail.com` with the subject `CYIDE Security`.

Do not open a public issue for security vulnerabilities.

## Sensitive Data

- Do not commit secrets such as `CY_API_KEY`.
- The extension reads secrets from the environment or local config files only.

## Dependencies

- Keep `npm ci` and GitHub Actions up to date.
- Review upstream fundament changes carefully before merging automated update PRs.
