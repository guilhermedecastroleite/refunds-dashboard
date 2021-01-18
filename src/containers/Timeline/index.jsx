import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

import TimelineCard from '../../components/Cards/TimelineCard';

const Timeline = ({ data, boxProps }) => (
  <Box {...boxProps}>
    {data.map((item) => (
      <TimelineCard mt='24px' key={`${item.id} - ${item.amountSpent}`} item={item} />
    ))}
  </Box>
);

Timeline.propTypes = {
  data: PropTypes.array.isRequired,
  boxProps: PropTypes.object,
};

Timeline.defaultProps = {
  boxProps: {},
};

export default Timeline;
