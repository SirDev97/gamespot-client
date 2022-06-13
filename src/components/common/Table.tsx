import Column from '../../models/Column';
import Game from '../../models/Game';
import SortCol from '../../models/SortCol';

import TableBody from './TableBody';
import TableHeader from './TableHeader';

interface TableProps {
  columns: Column[];
  data: Game[];
  onSort: (sortColumn: SortCol) => void;
  sortColumn: SortCol;
}
function Table({ columns, data, onSort, sortColumn }: TableProps) {
  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody data={data} columns={columns} />
    </table>
  );
}

export default Table;