import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import FilterSidebar from "../../Shared/filter_sidebar";

// import { Card, Button, Row, Col } from "@material-tailwind/react";

function SearchResult() {
    return (
        <main className="flex p-2 mx-[260px] my-20">
            <FilterSidebar />
            <Card className="w-full ml-5 border-2 border-purple-500 h-32 mt-2 ">
                <CardBody>
                    <Typography className="font-sm  ">
                        Jet Air - Economy
                    </Typography>
                    <div className="flex flex-row">
                        <div className="flex justify-beetwen items-center">
                            <div className="flex flex-col items-center">
                                <Typography className="font-semibold font-sans">
                                    07:00
                                </Typography>
                                <Typography>JKT</Typography>
                            </div>
                        </div>
                    </div>
                </CardBody>
                <CardFooter className="pt-0 ">
                    <Button>Pilih</Button>
                </CardFooter>
            </Card>
        </main>

        //   <Card style={{ width: "100%" }}>
        //     <Card.Body>
        //       <Card.Title className="title">
        //         <Card.Img
        //           variant="top"
        //           // src={loading}
        //           style={{ width: "24px", marginRight: "10px" }}
        //         />
        //         Jet Air - Economy
        //       </Card.Title>
        //       <Row
        //         className="d-flex justify-content-between"
        //         style={{ marginLeft: "20px", marginTop: 0 }}
        //       >
        //         <Col className="col-8 d-flex gap-3 align-items-center">
        //           <div>
        //             <Card.Text className="fw-bold mb-2"> 07:00 </Card.Text>
        //             <Card.Text className="fw-bold mb-2"> JKT </Card.Text>
        //           </div>
        //           <div style={{ width: "100%" }}>
        //             <Card.Text className="title-departure text-center">
        //               4h 0m
        //             </Card.Text>
        //             <hr
        //               align="center"
        //               color="green"
        //               size="2"
        //               width="100%"
        //               style={{ margin: 0 }}
        //             />
        //             <Card.Text className="title-departure text-center">
        //               Direct
        //             </Card.Text>
        //           </div>
        //           <div className="d-flex gap-3 align-items-center">
        //             <div>
        //               <Card.Text className="fw-bold mb-2"> 11:00 </Card.Text>
        //               <Card.Text className="fw-bold mb-2"> MLB </Card.Text>
        //             </div>
        //             <Card.Img
        //               variant="top"
        //               // src={loading}
        //               style={{ width: "24px", marginRight: "10px" }}
        //             />
        //           </div>
        //         </Col>
        //         <Col className="col-4 d-flex flex-column align-items-end">
        //           <Card.Text className="fw-bold mb-2">IDR 4.950.000 </Card.Text>
        //           <Button className="col-3 py-1.5" variant="primary">
        //             Pilih
        //           </Button>
        //         </Col>
        //       </Row>
        //     </Card.Body>
        //   </Card>
    );
}

export default SearchResult;
