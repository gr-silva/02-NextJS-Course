import { useRouter } from "next/router";
import Link from "next/Link";

export default function Post() {
  const router = useRouter();

  return (
    <div>
      ID do post atual: {router.query.id}
      <ul>
        <li>
          <Link href="/">Ir para a home</Link>
        </li>
      </ul>
    </div>
  );
}
