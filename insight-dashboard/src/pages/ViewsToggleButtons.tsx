import { useState } from 'react';
import { Button, Stack } from '@mui/material';

type ViewsToggleProps = {
  views: { [key: string]: number };
};

const ViewsToggleButtons = ({ views }: ViewsToggleProps) => {
  const [showKeys, setShowKeys] = useState<{ [key: string]: boolean }>(
    Object.keys(views).reduce((acc, key) => ({ ...acc, [key]: true }), {})
  );

  const handleToggle = (key: string) => {
    setShowKeys((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', mt: 2 }}>
      {Object.entries(views).map(([key, value]) => (
        <Button
          key={key}
          variant="contained"
          onClick={() => handleToggle(key)}
        >
          {showKeys[key] ? key : value}
        </Button>
      ))}
    </Stack>
  );
};

export default ViewsToggleButtons;
