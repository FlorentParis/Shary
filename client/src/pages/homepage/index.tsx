import { useEffect, useState } from "react";
import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";
import { setEventsData } from "../../features/eventsSlice";
import {
  setCurrentEventData,
} from "../../features/currentEventSlice";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { Link } from "react-router-dom";
import useGetEvents from "../../hooks/useGetEvents";

const moment = require("moment");

export default function Homepage() {
  const dispatch = useAppDispatch();

  const userConnected = useAppSelector((state) => state.userConnected);

  /* Events */
  const getEvents = useGetEvents();
  const eventsData = useAppSelector((state) => state.events.data);

  /* useEffect(() => {
    getEvents().then((res) => {
      dispatch(setEventsData(res));
    });
    // //@ts-ignore
    // const sortedAsc = eventsData.sort((objA, objB) => 
    //   //@ts-ignore
    //   objA.start.getTime() - objB.start.getTime()
    // );

    // console.log(sortedAsc, "EVTDATA");
  }, []); */

  return (
    <>
      <PageBanner
        imgSrc="/icons/gradient/home-gradient.svg"
        title="Accueil"
        desc="Retrouvez un aperçu de vos évènements à venir et passés ou créez en un rapidement"
      />
      <PageContainer>
        <div className="page-homepage">
          <div className="carousel">
            <p>Vos évènements en cours</p>
            <div className="wrapper-container">
              <div
                className="wrapper"
                style={{ gridTemplateColumns: "repeat(12, 1fr)" }}
              >
                {eventsData?.map((event: any, index: number) => {
                  const eventStart = moment(event.start);
                  const eventEnd = moment(event.end);

                  return (
                    <>
                      {" "}
                      {moment().isBetween(eventStart, eventEnd) ? (
                        <Link
                          className="item"
                          to={`/event/${event._id}`}
                          onClick={(e) => dispatch(setCurrentEventData(event))}
                        >
                          <div
                            style={{
                              backgroundImage: "url('/img/upload-demo.png')",
                            }}
                          >
                            <div>
                              <span>{event.name}</span>
                              <p>Cliquez pour participez à cet évènement</p>
                            </div>
                          </div>
                          <div>
                            <span>{eventStart.format("DD/MM/YYYY")}</span>
                          </div>
                        </Link>
                      ) : null}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="carousel">
            <p>Vos évènements à venir</p>
            <div className="wrapper-container">
              <div
                className="wrapper"
                style={{ gridTemplateColumns: "repeat(12, 1fr)" }}
              >
                {eventsData?.map((event: any, index: number) => {
                  const eventStart = moment(event.start);

                  return (
                    <>
                      {" "}
                      {eventStart.isAfter(moment()) ? (
                        <Link
                          className="item"
                          to={`/event/${event._id}`}
                          onClick={(e) => dispatch(setCurrentEventData(event))}
                        >
                          <div
                            style={{
                              backgroundImage: "url('/img/upload-demo.png')",
                            }}
                          >
                            <div>
                              <span>{event.name}</span>
                              <p>Cliquez pour participez à cet évènement</p>
                            </div>
                          </div>
                          <div>
                            <span>{eventStart.format("DD/MM/YYYY")}</span>
                          </div>
                        </Link>
                      ) : null}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <p>Un nouvel évènement à venir ?</p>
            <button>Créez votre évènement</button>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
