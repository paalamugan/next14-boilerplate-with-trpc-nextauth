import { usePathname } from 'next/navigation';
import type { ComponentProps, FC } from 'react';

import SidebarGroup from '@/components/Containers/Sidebar/SidebarGroup';
import WithRouterSelect from '@/components/withRouterSelect';

import styles from './index.module.css';

type SidebarProps = {
  groups: Array<ComponentProps<typeof SidebarGroup>>;
};

const SideBar: FC<SidebarProps> = ({ groups }) => {
  const pathname = usePathname();

  const selectItems = groups.map(({ items, groupName }) => ({
    label: groupName,
    items: items.map(({ label, link }) => ({ value: link, label })),
  }));

  const currentItem = selectItems
    .map(item => item.items)
    .flat()
    .find(item => pathname === item.value);

  return (
    <aside className={styles.wrapper}>
      {selectItems.length > 0 && (
        <WithRouterSelect
          label="Change Page"
          values={selectItems}
          defaultValue={currentItem?.value}
        />
      )}

      {groups.map(({ groupName, items }) => (
        <SidebarGroup key={groupName.toString()} groupName={groupName} items={items} />
      ))}
    </aside>
  );
};

export default SideBar;
