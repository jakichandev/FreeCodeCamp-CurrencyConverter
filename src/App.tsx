import "./App.css";
import { useState, useMemo } from "react";
import ConverterForm from "./components/form/Form";
import Field from "./components/form/Field";
import Select from "./components/form/Select";
import Input from "./components/form/Input";
import { ThemeProvider } from "styled-components";
import Title from "./components/theme/Title";
import { swapFirstSecond } from "./utils/utils";
import {
  exchangeMapping,
  currencies,
  currencySymbols,
} from "./lib/currencies_lib";
import { Paragraph } from "./components/theme/Paragraph";
import { theme as mainTheme, darkTheme } from "./lib/theme";
import { Main } from "./components/theme/Main";
import { Switch } from "@mui/material";
import Fixed from "./components/theme/FixedContainer";

function App() {
  const [theme, setTheme] = useState(mainTheme);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [input, setInput] = useState(1);

  const calculate = useMemo(() => {
    if (from === to) return input;
    return input * exchangeMapping[to as keyof typeof exchangeMapping];
  }, [input, from, to]);

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Fixed position="top-right">
          <Switch style={{color: theme.colors.main}} onClick={() => theme === mainTheme ? setTheme(darkTheme) : setTheme(mainTheme)} />
        </Fixed>
        <Fixed position="top-left">
    <Paragraph $size="small" $weight="bold">FreeCodeCamp project - Front End Development Libraries Certification Project <br /> <a href="https://www.freecodecamp.org/learn/front-end-development-libraries-v9/lab-currency-converter/build-a-currency-converter">https://www.freecodecamp.org/learn/front-end-development-libraries-v9/lab-currency-converter/build-a-currency-converter</a></Paragraph>
        </Fixed>
        <ConverterForm>
          <Title>
            Currency Converter from {from} to {to}
          </Title>
          <Field label="Amount" name="amount" type="number">
            <Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInput(Number(e.target.value))
              }
              defaultValue={input}
              type="number"
              name="amount"
            />
          </Field>
          <Field label="From" name="from">
            <Select
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setFrom(e.target.value)
              }
              options={currencies}
            />
          </Field>
          <Field label="To" name="to">
            <Select
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setTo(e.target.value)
              }
              options={swapFirstSecond(currencies)}
            />
          </Field>
          <Paragraph
            $weight="bold"
            $size="large"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            Result of conversion{" "}
            <span style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
              {calculate.toFixed(2)}{" "}
              {currencySymbols[to as keyof typeof currencySymbols]}
            </span>
          </Paragraph>
        </ConverterForm>
      </Main>
    </ThemeProvider>
  );
}

export default App;
