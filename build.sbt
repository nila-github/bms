
name := "FishOFresh"

version := "1.0"

lazy val root = (project in file(".")).enablePlugins(PlayJava, PlayEbean)

scalaVersion := "2.11.8"

libraryDependencies ++= Seq(
  javaJdbc,
  cache,
  javaWs,
  "com.oracle" % "ojdbc6" % "11.2.0.3",
  "com.fasterxml.jackson.core" % "jackson-core" % "2.8.3",
  "com.fasterxml.jackson.core" % "jackson-databind" % "2.8.3",
  "com.fasterxml.jackson.core" % "jackson-annotations" % "2.8.3",
  "com.google.code.gson" % "gson" % "2.8.0",
  "org.apache.poi" % "poi" % "3.15",
  "org.apache.poi" % "poi-ooxml" % "3.15",
  "com.datastax.cassandra" % "cassandra-driver-core" % "3.0.0",
  "com.datastax.cassandra" % "cassandra-driver-mapping" % "3.0.0",
  "org.jxls" % "jxls" % "2.3.0",
//  "org.jxls" % "jxls-jexcel" % "1.0.6",
  "org.jxls" % "jxls-poi" % "1.0.11",
   "mysql" % "mysql-connector-java" % "5.1.18"
)

unmanagedResourceDirectories in Compile += baseDirectory.value / "resources"
unmanagedResourceDirectories in Compile += baseDirectory.value / "resources/templates"

routesGenerator := InjectedRoutesGenerator
javacOptions ++= Seq("-source", "1.8", "-target", "1.8")

javacOptions += "-Xlint:unchecked"


