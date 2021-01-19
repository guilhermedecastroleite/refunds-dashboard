import PropTypes from 'prop-types';
import { Box, Flex } from '@chakra-ui/react';

import TimelineCard from '../../components/Cards/TimelineCard';
import Loading from '../../components/Layout/Loading';
import Error from '../../components/Layout/Error';

const Timeline = ({
  data, loading, error, boxProps,
}) => {
  if (loading) {
    return (
      <Flex w='100%' justifyContent='center' alignItems='center' {...boxProps}>
        <Loading />
      </Flex>
    );
  }

  if (error) {
    return <Error open={error} error={error} />;
  }

  return (
    <Box {...boxProps}>
      {data.map((item) => (
        <TimelineCard mt='24px' key={`${item.id} - ${item.amountSpent}`} item={item} />
      ))}
    </Box>
  );
};

Timeline.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  boxProps: PropTypes.object,
};

Timeline.defaultProps = {
  boxProps: {},
};

export default Timeline;
