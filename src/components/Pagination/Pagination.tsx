import { FC } from "react";
import { Button } from "../Button/Button";
import { ActionsContainer, Text, RootElement } from "./styles";

interface IPaginationProps {
  count: number;
  page: number;
  onNextClick(): void;
  onPreviousClick(): void;
}

export const Pagination: FC<IPaginationProps> = ({
  count,
  page,
  onNextClick,
  onPreviousClick,
}) => {

  return (
    <RootElement>
      <div>
        <Text>Página {page} de {count}</Text>
      </div>
      <ActionsContainer>
        {
          page !== 1 &&
          <Button onClick={onPreviousClick}>
            Anterior
          </Button>
        }
        {
          page !== count &&
          <Button onClick={onNextClick}>
            Siguiente
          </Button>
        }
      </ActionsContainer>
    </RootElement>
  );
};
