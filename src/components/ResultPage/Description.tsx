import * as R from './styles/ResultPage.style';
interface DescriptionProps {
  styleDetail?: string;
  stylePoint?: string;
  details?: string[];
}

const Description: React.FC<DescriptionProps> = ({
  styleDetail,
  stylePoint,
  details,
}) => {
  return (
    <R.ContentsBox>
      <R.Title>
        {styleDetail} "{stylePoint}"
      </R.Title>
      <R.Line />
      <R.ListItemContainer>
        <div style={{ marginTop: '20px' }}>
          <ul>
            {details?.map((detail, index) => (
              <R.ListItem key={index}>{detail}</R.ListItem>
            ))}
          </ul>
        </div>
      </R.ListItemContainer>
    </R.ContentsBox>
  );
};

export default Description;
