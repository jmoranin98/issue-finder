import { FC } from "react";
import { Button } from "../Button/Button";
import { ActionsContainer, Text, RootElement } from "./styles";

interface IPaginationProps {
  totalPages: number;
  page: number;
  onNextClick(): void;
  onPreviousClick(): void;
}

export const Pagination: FC<IPaginationProps> = ({
  totalPages,
  page,
  onNextClick,
  onPreviousClick,
}) => {

  return (
    <RootElement>
      <div>
        <Text>Página {page} de {totalPages}</Text>
      </div>
      <ActionsContainer>
        {
          page !== 1 &&
          <Button onClick={onPreviousClick}>
            Anterior
          </Button>
        }
        {
          page !== totalPages &&
          <Button onClick={onNextClick}>
            Siguiente
          </Button>
        }
      </ActionsContainer>
    </RootElement>
  );
};
