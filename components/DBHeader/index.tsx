import { DBHeaderBlock } from "styles/components/headers";

type DBHprops = {
    text: string;
}

function DBHeader({ text }: DBHprops) {
  return <DBHeaderBlock>{text}</DBHeaderBlock>;
}

export default DBHeader;
