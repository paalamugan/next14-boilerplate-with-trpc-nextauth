import { AppConfig } from '@/constants/appConfig';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto grid size-full max-w-screen-md grid-cols-[1fr] grid-rows-[auto_1fr_auto]">
        <header className="border-b border-gray-300">
          <div className="pb-8 pt-16">
            <h1 className="mb-3 text-center text-3xl font-bold text-gray-900">{AppConfig.title}</h1>
            <h2 className="text-xl">{AppConfig.description}</h2>
          </div>

          <div className="flex justify-between">
            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">{props.leftNav}</ul>
            </nav>

            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">{props.rightNav}</ul>
            </nav>
          </div>
        </header>

        <main>{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.title}. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export { BaseTemplate };
