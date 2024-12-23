use wasm_bindgen::prelude::*;
use serde::{Deserialize, Serialize};

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Change {
    ty: String,
    st: String,
    si: usize,
    ei: usize,
    sm: serde_json::Value,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct ChangeLogEntry {
    ty: String,
    snapshot: Vec<Change>,
    timestamp: u64,
    userId: String,
    revision: u32,
    changeId: Option<String>,
    operation: Option<String>,
    operationValue: Option<serde_json::Value>,
    isUndo: bool,
}

#[wasm_bindgen]
pub fn parse_changes(changelog: &str) -> JsValue {
    let out: Vec<ChangeLogEntry> = serde_json::from_str(changelog).unwrap();
    JsValue::from_serde(&out).unwrap()
}
