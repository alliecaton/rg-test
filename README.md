# Rooster Grin

Rooster Grin Media test. Deployed and available [here](https://alliecaton.github.io/roostergrin-test/).

Backend Repo can be found [here](https://github.com/alliecaton/roostergrin-sanity-cms).

Tech At a Glance:

- React Frontend
  - React Slick Carousel
  - React Spinners (for loading fetched carousel data)
- Sanity headless CMS backend
- vanilla CSS (including animations)

## Brief Checklist of how Requirements and Bonus Features were met :white_check_mark:

Required Features:

- Mockups are followed :heavy_check_mark:
- Carousel in last section :heavy_check_mark:
- Mobile Responsive :heavy_check_mark:
- Subtle Animations on the four icons :heavy_check_mark:
  - Also included subtle animation on the two social icons in the footer.
- Attention to Detail :heavy_check_mark:
  - Specifically with branded colors/icons and responsive formatting.
- Modular and concise code :heavy_check_mark:
  - Utilizes the container/component structure so that generalized components can be highly re-used, cutting down on repetition.
- Fully funcitonal capabilities :heavy_check_mark:
- Best practices & good use of images/assets :heavy_check_mark:
- Grid system :heavy_check_mark:
- Fade-in effect for hero title :heavy_check_mark:

Bonus Features:

- Use of Dev Server :heavy_check_mark:
- Front end framework :heavy_check_mark:
  - React
- Dynamic backend from a CMS :heavy_check_mark:
  - Utilized Sanity for carousel content

## Technical Deeper Dive :computer:

What technologies I used and why:

- React
  - Ability to structure components as container parent components with child components works very well for stacked website structures like the one mocked up
  - Easy to reuse components. I created separate button and text container components that are re-used throughout the entire application. This cuts down on a lot of unecessary redundancy.
  - Great for future expansion and upscaling.
- Sanity:
  - Does not enforce any schema or structure so it can easily be formatted to fit with whatever app structure.
  - Clean and straightforward interface that is easy for users at any level of technical literacy to use.
  - While I only utilized Sanity for carousel content, because it has no enforced structure, it could easily be expanded to connect with each component's content.
- Vanilla CSS:
  - I _love_ creating vanilla CSS animations. When I saw that this application would require animations, I knew right away that I was going to create them using @keyframes with vanilla CSS
  - I enjoy the challenge and versatility of working with vanilla CSS over frameworks like Bootstrap. I also love using Bootstrap, especially when I need to get something up and running quickly, but I like the control that utilizing only CSS gives me.

## Struggles :triumph:

I really wanted to push myself and create this application using almost 100% grid components. I normally rely on flexbox for a lot of my application structuring, so it definitely took a bit of playing around to get all of my grids working how I wanted them to. CSS Grid is super powerful, but definitely more verbose and finicky than flexbox, so my biggest struggles were mostly centered around my grids responisvely moving things where I wanted them to go and keeping all of my elements in the correct spot when resizing.

## Favorite Part :sparkles:

CSS animtaions! I love creating CSS animations, and I got to try out some different techniques that I'd never used before on this application. In the past, I'd only ever made color-based CSS animations (gradient cycles, background swipes, etc), so I had a good time making some animations that utilized transform and opacity this time around.

## What I Would Expand Upon :muscle:

- Expand Sanity backend to make content in each container editable from the CMS rather than just the carousel.
- Utilize flexbox more generously within and alongside the grids for cleaner setup and responsiveness.
- Add a navigation that utilizes react-scroll to route and scroll navigate to different sections.
