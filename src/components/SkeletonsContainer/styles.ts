import { styled } from "@/styles";

export const SkeletonsContainer = styled('section', {
  width: 'fit-content',
  display: 'grid',
  gridTemplateColumns: '218px 218px 218px 218px',
  gridColumnGap: '22px',
  gridRowGap: '31px',
  margin: '70px auto 36px auto',

  '@bp1': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    gap: 18,

    marginTop: 18,
  }
})