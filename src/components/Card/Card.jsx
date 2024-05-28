import React from 'react';
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Tooltip,
} from '@mantine/core';

const PortfolioCard = ({ portfolio, i }) => {
  console.log('IN CARd');
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="w-80 h-80 mx-2"
      key={i}>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={20}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        {portfolio.name?.length > 10 ? (
          <Group>
            <Tooltip
              label={portfolio.name}
              color="#656565"
              position="right"
              withArrow
              styles={{
                tooltip: {
                  textOverflow: 'clip',
                  whiteSpace: 'pre-wrap',
                  maxWidth: 300,
                  textAlign: 'justify',
                },
              }}>
              <Text size="sm">{portfolio.name.slice(0, 5)}</Text>
            </Tooltip>
          </Group>
        ) : (
          <Text fw={500}>{portfolio.name || 'Sample'}</Text>
        )}
        <Badge color="pink">{portfolio.title || 'SAMPLE'}</Badge>
      </Group>
      {portfolio.description.length > 10 ? (
        <Group>
          <Tooltip
            label={portfolio.description}
            color="#656565"
            position="right"
            withArrow
            styles={{
              tooltip: {
                textOverflow: 'clip',
                whiteSpace: 'pre-wrap',
                maxWidth: 300,
                textAlign: 'justify',
              },
            }}>
            <Text size="sm" lineClamp={2}>
              {portfolio.description}
            </Text>
          </Tooltip>
        </Group>
      ) : (
        <Text size="sm">{portfolio.description}</Text>
      )}

      <Button color="blue" fullWidth mt="md" radius="md">
        Open Portfolio
      </Button>
    </Card>
  );
};

export default PortfolioCard;
