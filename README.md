# Vanilla-extract playground

This is a playground to experiment with creating and consuming component made following the vanilla-extract styling framework outlined below. 

## Develop

This uses [seek-oss/playroom][playroom] to create a lightweight development experience where you can create small, quick examples to develop against in real-time.

```bash
# Restore dependencies
yarn install

# Run playroom
yarn dev
```

### Docs

Storybook is currently a WIP

```bash
# Restore dependencies
yarn install

# Serve docs locally
yarn docs
```

## What is this?
This spikes out a rather sophisticated set of tools and conventions to allow for scalable, consistent, and type-safe styling. These tools include [vanilla-extract](https://github.com/seek-oss/vanilla-extract) and [sprinkles](https://vanilla-extract.style/documentation/sprinkles-api/), a `<Box />` pattern for component composition (for more of which, see below), and a mix of component and atomic-styling conventions. In general, this looks to the [Chakra UI](https://chakra-ui.com/) and [Braid](https://seek-oss.github.io/braid-design-system/) design systems for inspiration. This tooling is rather complex, but allows for some pretty nifty code and a snappy development experience.


### Vanilla-extract
[theme.css.ts](https://github.com/georgialoper/vanilla-extract-playground/blob/main/src/styles/theme.css.ts)

Vanilla-extract is a JavaScript package that allows us, in very brief, to compose CSS styles using TypeScript and apply those stylings to React components. In other words, rather than relying on a separate CSS/SCSS file and the preprocessing required to translate SCSS to CSS, minify, etc., vanilla-extract allows for writing JavaScript/TypeScript objects straight into React code, and webpack combined with vanilla-extract handles the bundling, preprocessing, etc. One of the major benefits is that we can type our styling variables (i.e., naming them according to the design tokens our designers use in Figma) and get yelled at by TypeScript if a consumer of the component fails to reference those variables correctly in the appropriate context. Check out, for instance, how this creates styling for the Link component:

```
// Link.css.ts

import { style } from '@vanilla-extract/css'
import { vars } from 'styles/theme.css'

export const link = style({
  selectors: {
    '&:visited': {
      color: vars.color.black,
      outline: '0'
    },
    '&:hover': {
      color: vars.color.darkGrey,
    },
    '&:focus': {
      color: vars.color.darkTeal2,
    },
    '&:active': {
      color: vars.color.black,
      outline: '0'
    },
    '&.focus-visible:focus': {
      outline: vars.outline.default,
    },
    '&:focus:not(.focus-visible)': {
      outline: 0,
    },
  },
})
```

As you can see, this composes some styles using vanilla-extract helpers (in this case, the style() function) and references variables through conventional JavaScript syntax. The product is a JavaScript variable that corresponds to a self-contained, hashed CSS class that can be passed into React components:

```
// other imports
import * as CUSTOM_STYLES from './example.css'

// React component syntax
return (
  <a
    className={CUSTOM_STYLES.link}
    ...
  />
)
```
...which turns into conventional CSS classes, as below:

```
.Link__14ql7j00:focus {
    color: var(--color-darkTeal2__dn152ut);
}
```

You'll notice above that values in the derived string are custom CSS variables rather than derived string values (as in SCSS -> CSS). This is a core feature of vanilla-extract and, while this spike don't currently demonstrate the full capabilities of this, you can imagine how trivial this makes features like custom theming, dark/light mode, accessibility themes, etc. In other words, instead of creating a new set of CSS classNames for alternate themes, we will ultimately have the ability to simply change the custom CSS variables at runtime to generate a new theme.

### Sprinkles
[sprinkles.css.ts](https://github.com/georgialoper/vanilla-extract-playground/blob/main/src/styles/sprinkles.css.ts)

The other side of this spike's styling coin is vanilla-extract's sprinkles extension. In short, sprinkles allows for the creation of custom utility classes based off of global CSS variables (defined in `/styles/themes.css.ts`) with built-in syntax for responsiveness, theming, and other variable capabilities. Think Tailwind, but instead of remembering and writing string CSS classNames, we're able (as with vanilla-extract) to simply to reference relevant styles by our design token names. This is challenging to explain in the abstract, so here's a code example:

```
import React from 'react'
import { atoms } from '@/react/styles/sprinkles.css'

const ExampleComponent = () => {

  const classes = atoms({
    alignItems: 'center',
    border: 'muted',
    color: 'primary',
    display: 'flex',
    padding: {
      mobile: 'xs',
      tablet: 's',
      desktop: 'm'
    }
  })

  return (
    <div className={classes}>
      <p>Some content</p>
      <p>Other content</p>
    </div>
  )
}
```

In the above, `atoms` is the custom implementation of vanilla-extract's sprinkles. In `styles/sprinkles.css.ts`, a JavaScript object is created with keys corresponding to CamelCased standard CSS property names (i.e., the flex property `align-items` becomes `alignItems`) and values corresponding, well, to whatever we want. In some cases, those are just conventional and expected CSS values (`alignItems` in 'normal' CSS can accept center as a value, so in `sprinkles.css.ts` this asserts that center is an acceptable value). In other cases, the values can assert a key to our design token CSS variables. Color, for instance, can only accept prescribed design token names (for example, `primary` above). Attempting to pass an arbitrary string in as the value will throw a TypeScript error. The `div` in this example will be supplied with unique utility classes for each of the key: value pairs included in that atoms function's object argument. Notice too that in how the padding property is defined on that argument - it's passes an object that's keys are three responsive stylings to unique values (mobile, tablet, and desktop). This is allowed for in `sprinkles.css.ts`, and the upshot is that responsive stylings can be created with minimal verbosity.

So, what do we get for all this complexity? There are a few major benefits:

 - Type safety for our CSS, which protects against arbitrary color, spacing, etc. choices.

 - Reduce the mental burden of introducing another system for styling. With traditional patterns (class string names), there's always another system we need to introduce: a naming scheme (BEM vel sim.), a utility-class-first pattern (Tailwind), or relatively arbitrary CSS classnames that correspond to UI elements (Bulma, Bootstrap). With this pattern, once you've learned the system, any styling should rely either on conventional CSS key: value pairs or design token names--the same names our designers use in Figma.

 - Reduce the number of times a developer needs to reach into another part of the stack to get work done. The complexity is bundled up in the sprinkles.css.ts file, and from there, one only needs to import it into components to get the benefit of keeping ones work focused on one component at a time.

That said, while the above demonstrates a possible use of 'atomic' styles generated through the sprinkles library, it should be rare that anyone actually implements styling in this way. These atomic styles are the powerhouse of one of the other design choices in this spike, the <Box>.

### The `<Box />`
[Box.tsx](https://github.com/georgialoper/vanilla-extract-playground/blob/main/src/components/Box/Box.tsx)

Following some patterns that can be seen in the Chakra UI design system, this creates a React component, `<Box>`, to encapsulate some of the complexity of the above styling system and expose it in a sane way. A broad definition of this component's purpose is: the `<Box>` is a 'blank' React component that can resolve into any HTML tag the developer wants and that exposes all possible styling keys (alignItems, display, color, etc.) as top-level props and all possible styling values ('center', 'block', 'primary', etc.) as the possible values of those keys (with TypeScript support, of course). What does that mean? Take the following implementation example:

```
import React from 'react'
import {
  Box
} from '@/react/components'

const ExampleComponent = ({props}) => {

  return (
    <Box
      color="primary"
      fontWeight="bold"
      tag="p"
    >
      {props.children}
    </Box>
  )
}
```

The above code would ultimately render a bolded tag with the teal coloring supplied on it. How does this work? In short, the `<Box>` component as written accepts any of the possible CSS keys as props and creates a className string out of those supplied props. The above two styling props (color and fontWeight) will be transformed in the `<Box>` component into a className string of atomic classes (generated through sprinkles) that resembles something like `<p class="sprinkles_fontWeight_bold__ccrume325 sprinkles_fontWeight_color__caru2me5">Some content</p>`. The tag prop allows us to specify a conventional HTML element tag (although the `<Box>` will default to a div if tag is not supplied).

Why is this valuable? This ultimately is what will allow us to compose relatively streamlined, type-safe, and predictable components whose styling is supplied entirely (or almost entirely) through our atomic styles. Take one of the more simple components, for example: the `<Columns>` component.

```
import React, { forwardRef } from 'react'

import Box, {
  BoxDefaultProps,
  BoxStylingProps
} from '@/react/components/Box/Box'

type ColumnsDefaultProps = {
  embedded?: boolean,
  styles?: BoxStylingProps,
}

type ColumnsProps = ColumnsDefaultProps & BoxDefaultProps

const Columns = forwardRef(({
  embedded = false,
  styles,
  ...nativeProps
}: ColumnsProps, ref) => {

  return (
    <Box
      alignItems="stretch"
      display="flex"
      flexWrap="wrap"
      marginX={ embedded ? '-m' : 'auto' }
      maxWidth="screen"
      { ...styles }
      { ...nativeProps }
      ref={ ref }
    >
      { nativeProps.children }
    </Box>
  )
})

Columns.displayName = 'Columns'

export default Columns
```

In the above example, you can see that `<Columns>` component is basically just a flex container. Rather than writing out an idiosyncratic className to supply the relevant CSS properties, the `<Box>` component allows us to instead compose a `<Box>` whose props map onto the atomic classNames we ultimately want the container to have. These props --> atomic classNames ultimately resolve into something like:

```
sprinkles_marginLeft_auto_mobile__ccrume18g sprinkles_marginRight_auto_mobile__ccrume1c4 sprinkles_alignItems_stretch_mobile__ccrumek sprinkles_display_flex_mobile__ccrumemc sprinkles_flexWrap_wrap_mobile__ccrumerw sprinkles_maxWidth_screen_mobile__ccrume1lo sprinkles_justifyContent_space-between_mobile__ccrumems
```

In other words, hashed utility classes, but without the need to remember a utility-class naming scheme, and supplied at the component level. The other quirk/benefit is that a component's props can be keyed to its atomic styles. Notice in the `<Columns>` component there is a ternary check of the embedded prop to determine the margins on the component in `marginX={ embedded ? '-m' : 'auto' }`.

Notice one other feature of the above: the styles prop that the `<Columns>` component accepts. This is a custom implementation and a design choice I've made, the merits of which should be debated and iterated on independent of the rest of this system. The styles prop can accept any (or a specified subset) of the valid atomic key: value pairs and then spreads out those key: value pairs onto the `<Box>`. Importantly, this spread happens after the 'default' styling props are passed into the `<Box>`. Just as with any JavaScript object (which is ultimately the data structure that React props resolve to), if you were to include one of our valid key: value styling pairs into the styles prop object, the subsequent spread would override the 'default' values supplied onto the `<Box>` in the component. In other words:

```
<Columns>
  // some other components
</Column>

<Columns
  styles={{
    alignItems: 'center'
  }}
>
  // some other components
</Columns>
```

In the case of the second of these two components, explicitly supplying `alignItems: 'center'` in the styles prop will override the default `alignItems: 'stretch'` supplied in the component itself.

Taken all together, the above pattern allows for a maximum of flexibility (since all components expose the styles prop for custom styling overrides) with a minimum of boilerplate. The goal is to make truly self-contained and highly expressive components with easy interfaces for adding, removing, and adjusting styling at will.

### What does this ultimately look like?

At this point, your head is probably spinning and you're thinking "You're crazy if you expect that all our developers are going to take the time to grok all this". If we execute against this well and swiftly create some critical mass of components, consuming developers should only have to worry about learning what components exist, expect those components to have context specific props (ie. an `href` prop for the Link component, width for columns), design props (ie. `variant`, `palette`), and they can dip into the styles object for all/the relevant css properties if absolutely necessary. And, of course, TypeScript will be there to help guide what is and isn't available for use.

Take, for example, this example page-level parent component:

```
return (
  <BaseLayout>
     <Columns styles={{ marginTop: 'xxl' }} tag="section">
       <Column>
          <Heading tagLevel="1">Components</Heading>
          <Container styles={{ paddingBottom: "xl" }}>
            <Divider />
          </Container>
          <Container styles={{ marginBottom: 'xl' }}>
            <Heading tagLevel="3">Inputs</Heading>
            <Container styles={{ border: 'default', padding: 'xl' }}>
              <Container tag="fieldset">
                <Container tag="legend">
                  <Text>Here are some radio options:</Text>
                </Container>

                <InputRadioOption
                  handleSelect={setSelectedValueRadioOptions}
                  selected={selectedValueRadioOptions === 'radio-option-1'}
                  sharedName={sharedNameRadioOptions}
                  value="radio-option-1"
                >
                  <Text>Here is the first option.</Text>
                </InputRadioOption>

                <InputRadioOption
                  handleSelect={setSelectedValueRadioOptions}
                  selected={selectedValueRadioOptions === 'radio-option-2'}
                  sharedName={sharedNameRadioOptions}
                  value="radio-option-2"
                >
                  <Text>Here is the second option.</Text>
                </InputRadioOption>
              </Container>
            </Container>
          </Container>
       </Column>
     </Columns>
  </BaseLayout>
)
```

Most the the styles are present out of the box, with only occasional use of the `styles` prop. Of course, we'll have to reach some critical mass of components for this to become the reality for most interfaces.

Complex layouts that make heavy use of pseudo selectors, `:focus`, `:active` etc., or require css/theme values outside of our defined system will still require making a new `.css.ts`, though I would expect more frontend-focused developers are executing against these types of designs anyways...

### More reading
Here are maybe some better primers for vanilla-extract which might help make the above more digestable.
 - [Theming a React Application with Vanilla Extract](https://formidable.com/blog/2021/vanilla-extract/)
 - [vanilla-extract tutorial: Create zero-runtime style sheets in TypeScript - LogRocket Blog](https://blog.logrocket.com/vanilla-extract-tutorial-create-zero-runtime-stylesheets-in-typescript/)

Also recommend following Mark Dalgleish, creator of vanilla-extract and co-creator of css modules. Maybe start here:

 - Talking about the power of the box component: [🎄🧁 Mark Dalgleish on Twitter](https://twitter.com/markdalgleish/status/1364211312000073732?lang=da)

 - His explanation of vanilla extract: [RF21 – Mark Dalgleish – Zero-runtime CSS-in-TypeScript with vanilla-extract](https://www.youtube.com/watch?v=23VqED_kO2Q)

### TBD

 - This implementation does not allow typography and the reset to "leak", but maybe we want those to?
 - Theming. Here's a nice svelte-flavored walkthrough of this
 - How much should we "lock down" the component's styling/how much flexibility do we want to allow?
 - I'm of the opinion that elements shouldn't define their own spacing, and would argue that we should go so far as to not even allow for this in content component's `styles` props. That responsibility should be delegated to the parent elements. But it's debatable how much this will impact usability...
 - Cleanup, test, and document current components and add many, many, more components
