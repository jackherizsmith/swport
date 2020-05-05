---
layout: portfolio.njk
tags: portfolio
featured: true
title: People should be better behaved
journal: the Private Eye
date: 2020-05-04T21:56:48.322Z
image: /images/portfolio/photo-1559628129-67cf63b72248.jpeg
thumb: /images/portfolio/screenshot-from-2020-04-24-09-32-38.png
pdf: /images/portfolio/projects.pdf
---
o see working configuration examples, you can[start from a template](https://www.netlifycms.org/docs/start-with-a-template)or check out the[CMS demo site](https://cms-demo.netlify.com/). (No login required: click the login button and the CMS will open.) You can refer to the demo[configuration code](https://github.com/netlify/netlify-cms/blob/master/dev-test/config.yml)to see how each option was configured.

You can find details about all configuration options below. Note that[YAML syntax](https://en.wikipedia.org/wiki/YAML#Basic_components)allows lists and objects to be written in block or inline style, and the code samples below include a mix of both.

## [](https://www.netlifycms.org/docs/configuration-options/#backend)Backend

*This setting is required.*

The`backend`option specifies how to access the content for your site, including authentication. Full details and code samples can be found in[Backends](https://www.netlifycms.org/docs/backends-overview).

**Note**: no matter where you access Netlify CMS — whether running locally, in a staging environment, or in your published site — it will always fetch and commit files in your hosted repository (for example, on GitHub), on the branch you configured in your Netlify CMS config.yml file. This means that content fetched in the admin UI will match the content in the repository, which may be different from your locally running site. It also means that content saved using the admin UI will save directly to the hosted repository, even if you're running the UI locally or in staging.

## [](https://www.netlifycms.org/docs/configuration-options/#publish-mode)Publish Mode

By default, all entries created or edited in the Netlify CMS are committed directly into the main repository branch.

The`publish_mode`option allows you to enable "Editorial Workflow" mode for more control over the content publishing phases. All unpublished entries will be arranged in a board according to their status, and they can be further reviewed and edited before going live.

**Note:**Editorial workflow works with GitHub repositories, and support for GitLab and Bitbucket is[in beta](https://www.netlifycms.org/docs/beta-features/#gitlab-and-bitbucket-editorial-workflow-support).

You can enable the Editorial Workflow with the following line in your Netlify CMS`config.yml`file:

From a technical perspective, the workflow translates editor UI actions into common Git commands:

| Actions in Netlify UI ... | Perform these Git actions                                                                                        |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Save draft                | Commits to a new branch (named according to the pattern`cms/collectionName/entrySlug`), and opens a pull request |
| Edit draft                | Pushes another commit to the draft branch/pull request                                                           |
| Approve and publish draft | Merges pull request and deletes branch                                                                           |

## [](https://www.netlifycms.org/docs/configuration-options/#media-and-public-folders)Media and Public Folders

Netlify CMS users can upload files to your repository using the Media Gallery. The following settings specify where