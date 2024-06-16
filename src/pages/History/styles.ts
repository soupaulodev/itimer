import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors["gray-100"]};
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background: ${(props) => props.theme.colors["gray-600"]};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme.colors["gray-100"]};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background: ${(props) => props.theme.colors["gray-700"]};
      border-top: 4px solid ${(props) => props.theme.colors["gray-800"]};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;

export const Status = styled.span`
  span {
    font-size: 2rem;
  }
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &.green {
    span {
      color: ${(props) => props.theme.colors["green-500"]};
    }
  }

  &.red {
    span {
      color: ${(props) => props.theme.colors["red-500"]};
    }
  }

  &.yellow {
    span {
      color: ${(props) => props.theme.colors["yellow-500"]};
    }
  }
`;
