import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const SubscriptionRadio = ({ subscription }) => {
  const handleSubscr = e => {
    subscription(e.target.value);
  };

  return (
    <FormControl onChange={handleSubscr}>
      <FormLabel id="demo-row-radio-buttons-group-label">
        Subscription
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="starter" control={<Radio />} label="Starter" />
        <FormControlLabel value="pro" control={<Radio />} label="Pro" />
        <FormControlLabel
          value="business"
          control={<Radio />}
          label="Business"
        />
      </RadioGroup>
    </FormControl>
  );
};
