import NextLink from 'next/link';
import { Box, Text, Heading, Flex, Container, Button, Divider, Subheading, Grid } from '@modulz/radix';
import { HeroCodeDemo } from '../components/HeroCodeDemo';

export default function Home() {
  return (
    <div>
      <Container size={2} sx={{ textAlign: 'center', mt: 6 }}>
        <Heading size={5} sx={{ mb: 4 }}>
          The modern styling library
        </Heading>
      </Container>

      <Container size={1} sx={{ textAlign: 'center' }}>
        <Heading as="h2" size={2} sx={{ color: 'gray700', lineHeight: '4', fontWeight: 400 }}>
          Create tokens, styles, variants and themes for your components. Be more consistent than ever before.
        </Heading>
      </Container>

      <Box sx={{ pt: 8, pb: 9 }}>
        <Container size={2}>
          <HeroCodeDemo />
        </Container>
      </Box>

      <Flex sx={{ justifyContent: 'center', mb: 9 }}>
        <Divider size={2} sx={{ flexShrink: 0, width: '45px' }} />
      </Flex>

      <Container size={1} sx={{ textAlign: 'center' }}>
        <Subheading as="h2" size={1} mb={4} sx={{ color: 'gray700' }}>
          Features
        </Subheading>
        <Heading as="h3" size={4} mb={4}>
          A fully-featured styling library.
        </Heading>
      </Container>

      <Container size={2} sx={{ my: 8 }}>
        <Grid sx={{ gap: [6, 7], gridTemplateColumns: ['1fr ', '1fr 1fr'] }}>
          <Box>
            <Flex sx={{ alignItems: 'center', mb: 2 }}>
              <Box sx={{ mr: 4 }}>
                <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="#282B2E"
                  />
                </svg>
              </Box>
              <Text size={5} weight="medium" style={{ lineHeight: 1 }}>
                Performant
              </Text>
            </Flex>
            <Text as="p" size={3} sx={{ lineHeight: 2, color: 'gray700', pl: 7, ml: 1 }}>
              The main motivation and criteria is to make a performant library.
            </Text>
          </Box>

          <Box>
            <Flex sx={{ alignItems: 'center', mb: 2 }}>
              <Box sx={{ mr: 4 }}>
                <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="#282B2E"
                  />
                </svg>
              </Box>
              <Text size={5} weight="medium" style={{ lineHeight: 1 }}>
                Atomic
              </Text>
            </Flex>
            <Text as="p" size={3} sx={{ lineHeight: 2, color: 'gray700', pl: 7, ml: 1 }}>
              Each CSS property is a an atomic part of your complete CSS.
            </Text>
          </Box>

          <Box>
            <Flex sx={{ alignItems: 'center', mb: 2 }}>
              <Box sx={{ mr: 4 }}>
                <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="#282B2E"
                  />
                </svg>
              </Box>
              <Text size={5} weight="medium" style={{ lineHeight: 1 }}>
                Reusability
              </Text>
            </Flex>
            <Text as="p" size={3} sx={{ lineHeight: 2, color: 'gray700', pl: 7, ml: 1 }}>
              Each CSS property, given the same screen, pseudo and value is considered the same, giving high degree of
              reusability.
            </Text>
          </Box>

          <Box>
            <Flex sx={{ alignItems: 'center', mb: 2 }}>
              <Box sx={{ mr: 4 }}>
                <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="#282B2E"
                  />
                </svg>
              </Box>
              <Text size={5} weight="medium" style={{ lineHeight: 1 }}>
                Optimal injection
              </Text>
            </Flex>
            <Text as="p" size={3} sx={{ lineHeight: 2, color: 'gray700', pl: 7, ml: 1 }}>
              AKA Critical Path CSS. You can compose your styles outside of your UI, but no injection happens until it
              is actually used. Only used variants are injected
            </Text>
          </Box>

          <Box>
            <Flex sx={{ alignItems: 'center', mb: 2 }}>
              <Box sx={{ mr: 4 }}>
                <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="#282B2E"
                  />
                </svg>
              </Box>
              <Text size={5} weight="medium" style={{ lineHeight: 1 }}>
                Screens
              </Text>
            </Flex>
            <Text as="p" size={3} sx={{ lineHeight: 2, color: 'gray700', pl: 7, ml: 1 }}>
              Define a set of media queries as screens to easily express CSS active within a screen. Any type of @ rule
              is supported, for example, touch screens or portrait orientation
            </Text>
          </Box>

          <Box>
            <Flex sx={{ alignItems: 'center', mb: 2 }}>
              <Box sx={{ mr: 4 }}>
                <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="#282B2E"
                  />
                </svg>
              </Box>
              <Text size={5} weight="medium" style={{ lineHeight: 1 }}>
                Utils
              </Text>
            </Flex>
            <Text as="p" size={3} sx={{ lineHeight: 2, color: 'gray700', pl: 7, ml: 1 }}>
              Create your own CSS properties.
            </Text>
          </Box>

          <Box>
            <Flex sx={{ alignItems: 'center', mb: 2 }}>
              <Box sx={{ mr: 4 }}>
                <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="#282B2E"
                  />
                </svg>
              </Box>
              <Text size={5} weight="medium" style={{ lineHeight: 1 }}>
                Typed
              </Text>
            </Flex>
            <Text as="p" size={3} sx={{ lineHeight: 2, color: 'gray700', pl: 7, ml: 1 }}>
              Fully typed API, including variants
            </Text>
          </Box>

          <Box>
            <Flex sx={{ alignItems: 'center', mb: 2 }}>
              <Box sx={{ mr: 4 }}>
                <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="#282B2E"
                  />
                </svg>
              </Box>
              <Text size={5} weight="medium" style={{ lineHeight: 1 }}>
                No Specificity
              </Text>
            </Flex>
            <Text as="p" size={3} sx={{ lineHeight: 2, color: 'gray700', pl: 7, ml: 1 }}>
              No more specificity issues as an atomic mindset opens up a more efficient and straight forward way to
              solve it. Even extended components (via the styled or as prop) won't contain multiple CSS properties.
            </Text>
          </Box>

          <Box>
            <Flex sx={{ alignItems: 'center', mb: 2 }}>
              <Box sx={{ mr: 4 }}>
                <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="#282B2E"
                  />
                </svg>
              </Box>
              <Text size={5} weight="medium" style={{ lineHeight: 1 }}>
                Token-aware values
              </Text>
            </Flex>
            <Text as="p" size={3} sx={{ lineHeight: 2, color: 'gray700', pl: 7, ml: 1 }}>
              Apply tokens as CSS values without any extra work
            </Text>
          </Box>

          <Box>
            <Flex sx={{ alignItems: 'center', mb: 2 }}>
              <Box sx={{ mr: 4 }}>
                <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="#282B2E"
                  />
                </svg>
              </Box>
              <Text size={5} weight="medium" style={{ lineHeight: 1 }}>
                Token-based theming
              </Text>
            </Flex>
            <Text as="p" size={3} sx={{ lineHeight: 2, color: 'gray700', pl: 7, ml: 1 }}>
              Create themes overriding the tokens and expose themes to any parts of your app.
            </Text>
          </Box>

          <Box>
            <Flex sx={{ alignItems: 'center', mb: 2 }}>
              <Box sx={{ mr: 4 }}>
                <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="#282B2E"
                  />
                </svg>
              </Box>
              <Text size={5} weight="medium" style={{ lineHeight: 1 }}>
                Tokens as CSS Variables
              </Text>
            </Flex>
            <Text as="p" size={3} sx={{ lineHeight: 2, color: 'gray700', pl: 7, ml: 1 }}>
              Tokens are converted to CSS Variables, making dynamic themes performant to apply.
            </Text>
          </Box>

          <Box>
            <Flex sx={{ alignItems: 'center', mb: 2 }}>
              <Box sx={{ mr: 4 }}>
                <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="#282B2E"
                  />
                </svg>
              </Box>
              <Text size={5} weight="medium" style={{ lineHeight: 1 }}>
                Variant support
              </Text>
            </Flex>
            <Text as="p" size={3} sx={{ lineHeight: 2, color: 'gray700', pl: 7, ml: 1 }}>
              First class variant support, which get typed automatically
            </Text>
          </Box>

          <Box>
            <Flex sx={{ alignItems: 'center', mb: 2 }}>
              <Box sx={{ mr: 4 }}>
                <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="#282B2E"
                  />
                </svg>
              </Box>
              <Text size={5} weight="medium" style={{ lineHeight: 1 }}>
                Polymorphic As prop
              </Text>
            </Flex>
            <Text as="p" size={3} sx={{ lineHeight: 2, color: 'gray700', pl: 7, ml: 1 }}>
              Included in Components returned from the styled function
            </Text>
          </Box>

          <Box>
            <Flex sx={{ alignItems: 'center', mb: 2 }}>
              <Box sx={{ mr: 4 }}>
                <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="#282B2E"
                  />
                </svg>
              </Box>
              <Text size={5} weight="medium" style={{ lineHeight: 1 }}>
                Responsive values
              </Text>
            </Flex>
            <Text as="p" size={3} sx={{ lineHeight: 2, color: 'gray700', pl: 7, ml: 1 }}>
              CSS values can be defined per screen
            </Text>
          </Box>

          <Box>
            <Flex sx={{ alignItems: 'center', mb: 2 }}>
              <Box sx={{ mr: 4 }}>
                <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="#282B2E"
                  />
                </svg>
              </Box>
              <Text size={5} weight="medium" style={{ lineHeight: 1 }}>
                Responsive variants
              </Text>
            </Flex>
            <Text as="p" size={3} sx={{ lineHeight: 2, color: 'gray700', pl: 7, ml: 1 }}>
              You can apply different variants per screens
            </Text>
          </Box>

          <Box>
            <Flex sx={{ alignItems: 'center', mb: 2 }}>
              <Box sx={{ mr: 4 }}>
                <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="#282B2E"
                  />
                </svg>
              </Box>
              <Text size={5} weight="medium" style={{ lineHeight: 1 }}>
                Override usage
              </Text>
            </Flex>
            <Text as="p" size={3} sx={{ lineHeight: 2, color: 'gray700', pl: 7, ml: 1 }}>
              Similar to sx prop, allows overrides to be defined at the usage level
            </Text>
          </Box>

          <Box>
            <Flex sx={{ alignItems: 'center', mb: 2 }}>
              <Box sx={{ mr: 4 }}>
                <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="#282B2E"
                  />
                </svg>
              </Box>
              <Text size={5} weight="medium" style={{ lineHeight: 1 }}>
                Tiny
              </Text>
            </Flex>
            <Text as="p" size={3} sx={{ lineHeight: 2, color: 'gray700', pl: 7, ml: 1 }}>
              Both the css and the styled libraries together weight less than 3kb gzipped.
            </Text>
          </Box>

          <Box>
            <Flex sx={{ alignItems: 'center', mb: 2 }}>
              <Box sx={{ mr: 4 }}>
                <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="#282B2E"
                  />
                </svg>
              </Box>
              <Text size={5} weight="medium" style={{ lineHeight: 1 }}>
                Promotes consistent UI
              </Text>
            </Flex>
            <Text as="p" size={3} sx={{ lineHeight: 2, color: 'gray700', pl: 7, ml: 1 }}>
              A especially good feature when building design systems.
            </Text>
          </Box>

          <Box>
            <Flex sx={{ alignItems: 'center', mb: 2 }}>
              <Box sx={{ mr: 4 }}>
                <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="#282B2E"
                  />
                </svg>
              </Box>
              <Text size={5} weight="medium" style={{ lineHeight: 1 }}>
                Less generated CSS
              </Text>
            </Flex>
            <Text as="p" size={3} sx={{ lineHeight: 2, color: 'gray700', pl: 7, ml: 1 }}>
              The total output of the generated CSS gets smaller as your app gets bigger
            </Text>
          </Box>

          <Box>
            <Flex sx={{ alignItems: 'center', mb: 2 }}>
              <Box sx={{ mr: 4 }}>
                <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="#282B2E"
                  />
                </svg>
              </Box>
              <Text size={5} weight="medium" style={{ lineHeight: 1 }}>
                Create Higher level APIs
              </Text>
            </Flex>
            <Text as="p" size={3} sx={{ lineHeight: 2, color: 'gray700', pl: 7, ml: 1 }}>
              Can be created to fulfil different needs, for different frameworks. We can decide to also open source the
              low level library and allow the community to also create different types of API's as a potential marketing
              strategy. Same as React and React DOM.
            </Text>
          </Box>
        </Grid>
      </Container>
    </div>
  );
}
