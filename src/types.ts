type Data = {
  welcome_text: string;
  bible_verse: string;
  date: string;
  location: string;
  gretting: string;
  groom: {
    name: string;
    nickname: string;
    account_number: string;
    parents: {
      mother: {
        name: string;
        account_number: string;
      };
      father: {
        name: string;
        account_number: string;
      };
    };
  };
  bride: {
    name: string;
    nickname: string;
    account_number: string;
    parents: {
      mother: {
        name: string;
        account_number: string;
      };
      father: {
        name: string;
        account_number: string;
      };
    };
  };
  kakaotalk: {
    api_token: string;
    wedding_invitation_url: string;
    share_image: string;
  };
};
