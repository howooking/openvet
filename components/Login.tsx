import { useSession, signIn, signOut } from "next-auth/react";
import Button from "./Button";
import Image from "next/image";

export default function Login() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div className='flex items-center gap-3'>
        <Image
          src={session?.user?.image || ""}
          alt='user_img'
          width={30}
          height={30}
          className='rounded-full'
        />
        <p className='text-xs'>
          <span className='text-base font-bold'>{session?.user?.name}</span>{" "}
          수의사님
        </p>
        <Button onClick={() => signOut()} text='로그아웃' />
      </div>
    );
  }
  return <Button onClick={() => signIn()} text='로그인' />;
}
