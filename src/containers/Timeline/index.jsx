import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

import TimelineCard from '../../components/Cards/TimelineCard';

import getTimelineData from '../../api/timeline';

const Timeline = ({ boxProps }) => {
  const [timelineData, setTimelineData] = useState([
    {
      cardType: 'expense',
      cardDate: new Date(),
      expenseTypeIcon: null,
    },
  ]);

  useEffect(() => {
    const fetchTimelineData = async () => {
      const { data } = await getTimelineData();
      setTimelineData(data.content);
    };
    fetchTimelineData();
  }, []);

  return (
    <Box {...boxProps}>
      {timelineData.map((item) => (
        <TimelineCard mt='24px' key={item.id} item={item} />
      ))}
    </Box>
  );
};

Timeline.propTypes = {
  boxProps: PropTypes.object,
};

Timeline.defaultProps = {
  boxProps: {},
};

export default Timeline;
