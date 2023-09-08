import React, { useContext } from "react";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";
import {
  Category,
  ChartComponent,
  ColumnSeries,
  Inject,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import "./App.css";
import { FruitContext } from "./Contexts/FruitContext";

export function App() {
  const fruits = useContext(FruitContext);
  return (
    <>
      <div className={"container"}>
        <h2>List component</h2>
        <ListViewComponent
          id="list"
          dataSource={fruits}
          fields={{ text: "name" }}
        />
      </div>
      <div className={"container"}>
        <h2>Grid component</h2>
        <GridComponent id="grid" dataSource={fruits}>
          <ColumnsDirective>
            <ColumnDirective field="name" headerText="Name" width="100" />
            <ColumnDirective field="price" headerText="Price" width="100" />
          </ColumnsDirective>
        </GridComponent>
      </div>
      <div>some change</div>
      <div className={"container"}>
        <h2>Chart component</h2>
        <ChartComponent id="charts" primaryXAxis={{ valueType: "Category" }}>
          <Inject services={[ColumnSeries, Tooltip, LineSeries, Category]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={fruits}
              xName="name"
              yName="price"
              name="Fruits"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </>
  );
}
