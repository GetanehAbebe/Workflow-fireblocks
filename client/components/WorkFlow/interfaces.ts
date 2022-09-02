export interface PositionInterface {
  user?: String;
  position?: String;
  date?: String;
}

export interface UserInterface {
  firstName: String;
  lastName: String;
  id: Number;
}

// export interface PositionInterface {
//   [key: Number]: String | Number;
// }

export interface BoardProps {
  date: String;
  positionsAmount?: Number;
  isAdmin?: Boolean;
}

export interface WorkFlowInterface {
  isAdmin?: string;
}

export interface GeneralStateInterface {
  users: {
    usersList: any;
    userList: UserInterface[];
  };
  dates: {
    [key: string]: any;
  };
}

export interface AvialablePonsitionsInterface {
  length: Number | String;
}
