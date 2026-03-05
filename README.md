[![stability-beta](https://img.shields.io/badge/stability-beta-33bbff.svg)](https://github.com/mkenney/software-guides/blob/master/STABILITY-BADGES.md#beta) [![Crowdin](https://badges.crowdin.net/intro-bootstrap/localized.svg)](https://crowdin.com/project/intro-bootstrap)

# Intro Bootstrap Theme

Intro Bootstrap is an ecommerce storefront theme for Next Commerce that uses Bootstrap 5 and best practices for Next Commerce theme development.

You can add a theme in a few ways:
* Download/clone this repository and upload it as a ZIP file from the Storefront admin.
* Download/clone this repository and use **Theme Kit** to upload it to your storefront.
* Add a theme directly from your Storefront admin.

### Add the Intro Bootstrap Theme via Upload

1. Clone or download this repository
```
git clone git@github.com:NextCommerceCo/intro-bootstrap.git
```

2. Open `manifest.json` and update the name if needed:
```json
{
    "name": "<your store theme name>",
    "version": "1.1.8"
}
```

3. Compress all theme files into a single ZIP file.

4. From your Next Commerce admin, go to **Storefront > Themes**.

5. In the **Installed themes** section, click **Upload Theme**.

6. Click **Choose File**, select your ZIP file, then click **Upload**.


### Add the Intro Bootstrap Theme using Theme Kit

1. Clone or download this repository
```
git clone git@github.com:NextCommerceCo/intro-bootstrap.git
```

2. Install [Theme Kit](https://github.com/NextCommerceCo/theme-kit) to your local development environment.

3. Navigate to the cloned directory and create an empty theme on your store:

```
ntk init -n <theme name> -s <store url> -a <api key>
```

> A guide for creating the required API Key can be found on the [developer docs](https://developers.nextcommerce.com/docs/storefront/themes/theme-kit/).

4. Push the theme to your store:

```
ntk push
```

> After initialising, `ntk` creates a `config.yml` file so you don't need to pass credentials on every command. This file contains your API key — keep it secure and never commit it.

5. Customise and preview theme changes:

```
ntk watch
```

> Use `ntk watch` to monitor and sync changes from your local environment to the store automatically.


### Theme Reference Docs

Customising the theme is as simple as editing the HTML, CSS, and JS. See the theme reference documentation for more details.

- [Getting Started with Themes](https://developers.nextcommerce.com/docs/storefront/themes/)
- [Template Tag Reference](https://developers.nextcommerce.com/docs/storefront/themes/templates/tags/)
- [Filter Reference](https://developers.nextcommerce.com/docs/storefront/themes/templates/filters/)
- [Storefront API](https://developers.nextcommerce.com/docs/storefront/api/)


### Staying Up to Date with Changes

It's best practice for theme developers building on top of Intro Bootstrap to stay up to date with the latest changes. The recommended way is to add a remote `upstream` pointing to this repository. [More on Git Forks and Upstreams](https://www.atlassian.com/git/tutorials/git-forks-and-upstreams).

1. Navigate to your local clone/fork directory.

2. List existing remotes:
```
git remote -v
```

3. If you don't have an `upstream`, add it:
```
git remote add upstream git@github.com:NextCommerceCo/intro-bootstrap.git
```

4. Pull in the latest changes:
```
git fetch upstream && git pull upstream main
```
