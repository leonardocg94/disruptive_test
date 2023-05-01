import { Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { getCryptoConcurrencyDataService } from "../services/cryptoconcurrency_services";

export class IOEventHandler {
  private _socket: Socket<
    DefaultEventsMap,
    DefaultEventsMap,
    DefaultEventsMap,
    any
  >;

  constructor(
    socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
  ) {
    this._socket = socket;
  }

  public initEvents() {
    setInterval(() => {
      getCryptoConcurrencyDataService().then((data) => {
        this._socket.emit("get_concurrency", data.data ? data.data.data : []);
      });
    }, 10000);

    this._socket.on("disconnect", () => {
      console.log(`un usuario se ha desconectado ${this._socket.id}`);
    });
  }
}
