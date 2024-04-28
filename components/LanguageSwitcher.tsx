"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

function LanguageSwitcher() {
  const router = useRouter();
  const activeLocale = useLocale();
  //path without locale
  const path = usePathname().slice(3);

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(`/${nextLocale}${path}`);
  };

  return (
    <select
      className="border-2 rounded hover:opacity-60 cursor-pointer"
      onChange={onSelectChange}
      defaultValue={activeLocale}
    >
      <option value="en">English</option>
      <option value="ka">Georgian</option>
    </select>
  );
}

export default LanguageSwitcher;