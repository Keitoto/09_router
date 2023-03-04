import { Group, Image, Stack, Text, Title } from '@mantine/core';

export const HomePage = () => {
  return (
    <div>
      <Title order={1} mb="xl" mt="xl">
        HomePage
      </Title>
      <Group align="top" noWrap grow spacing="md">
        <Image src="https://images.unsplash.com/photo-1670349081674-90d0e76a20ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        <Stack justify="flex-start" spacing="xl">
          <Text size='md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero porro
            error, quos nostrum quas officia? Blanditiis, nostrum minus autem
            sunt provident molestiae similique quam, praesentium sit excepturi
            tempore expedita exercitationem!
          </Text>
          <Text size='lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero porro
            error, quos nostrum quas officia? Blanditiis, nostrum minus autem
            sunt provident molestiae similique quam, praesentium sit excepturi
            tempore expedita exercitationem!
          </Text>
          <Text size='lg'>
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
