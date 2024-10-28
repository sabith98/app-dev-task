export interface Item {
  id: string;
  name: string;
  type: FileType;
  description: string;
  attributes: string[];
  createdAt: string;
}

export type FileType =
  | 'Document'
  | 'Image'
  | 'Spreadsheet'
  | 'Video'
  | 'Audio'
  | 'Other';

export interface RootState {
  items: ItemsState;
}

export interface ItemsState {
  list: Item[];
  selectedItem: Item | null;
}

// Navigation types
export type RootStackParamList = {
  List: undefined;
  Create: undefined;
  Detail: {itemId: string};
};

export type NavigationProps = {
  navigation: {
    navigate: (screen: keyof RootStackParamList, params?: any) => void;
    goBack: () => void;
  };
};
