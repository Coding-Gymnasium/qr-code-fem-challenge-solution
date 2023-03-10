import {
  QRCodeImage,
  DescriptionWrapper,
  Title,
  Description,
  QRCodeWrapper,
  QRCodeTitle,
  Wrapper,
} from "./QRCode.styled";
import qRImage from '../../image-qr-code.png'

export default function QRCode() {
  return (
    <>
      <Wrapper>
        <QRCodeTitle>QR-Code FE Mentor Exercise</QRCodeTitle>
        <QRCodeWrapper>
          <QRCodeImage src={qRImage} alt="qr code image"/>
          <DescriptionWrapper>
            <Title>Improve your front-end skills by building projects</Title>
            <Description>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </Description>
          </DescriptionWrapper>
        </QRCodeWrapper>
      </Wrapper>
    </>
  );
}
