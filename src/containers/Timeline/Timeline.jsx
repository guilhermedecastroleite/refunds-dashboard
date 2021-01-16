import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
import TimelineCard from '../../components/Cards/TimelineCard';

const Timeline = ({ boxProps }) => (
  <Box {...boxProps}>
    <TimelineCard />
  </Box>
);

Timeline.propTypes = {
  boxProps: PropTypes.object,
};

Timeline.defaultProps = {
  boxProps: {},
};

export default Timeline;
