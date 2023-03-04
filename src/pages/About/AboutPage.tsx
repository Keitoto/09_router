import { Group, Image, Stack, Text, Title } from '@mantine/core';
import React from 'react';

export const AboutPage = () => {
  return (
    <div>
      <Title order={1} mb="xl" mt="xl">
        About
      </Title>
      <Group align="top" noWrap grow spacing="md">
        <Image src="https://images.unsplash.com/photo-1673378165516-35873c36f9e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
        <Stack justify="flex-start" spacing="xl">
          <Text size="md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero porro
            error, quos nostrum quas officia? Blanditiis, nostrum minus autem
            sunt provident molestiae similique quam, praesentium sit excepturi
            tempore expedita exercitationem!
          </Text>
          <Text size="lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero porro
            error, quos nostrum quas officia? Blanditiis, nostrum minus autem
            sunt provident molestiae similique quam, praesentium sit excepturi
            tempore expedita exercitationem!
          </Text>
          <Text size="lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero porro
            error, quos nostrum quas officia? Blanditiis, nostrum minus autem
            sunt provident molestiae similique quam, praesentium sit excepturi
            tempore expedita exercitationem!
          </Text>
        </Stack>
      </Group>
    </div>
  );
};
