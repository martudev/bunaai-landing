import styles from "./Steps.module.scss";

export const Steps = () => {
  return (
    <div className={styles.steps}>
      <div className={styles.step}>
        <div className={styles.step_left}>
          <div className={styles.step_left_container}>
            <div className={styles.step_left_container_title}>Fase 1</div>
            <div className={styles.step_left_container_subtitle}>
              Nos aseguramos de que es un cliente ideal y que entiende lo que
              podemos lograr
            </div>
          </div>
        </div>
        <div className={styles.step_right}>
          <div className={styles.step_right_border}>
            <div className={styles.step_right_dot}></div>
          </div>
          <div className={styles.step_right_container}>
            <div className={styles.step_right_container_title}>
              Captación y calificación del cliente
            </div>
            <ol>
              <li className={styles.step_right_content_list_title}>
                Llamada inicial (Discovery Call)
                <ul className={styles.step_right_content_list}>
                  <li>Nos conocemos y entendemos el contexto del negocio</li>
                  <li>
                    Preguntamos sobre tus problemas actuales, objetivos y
                    métricas.
                  </li>
                  <li>Exploramos si ya usas IA o automatizaciones.</li>
                  <li>
                    Consultamos tu presupuesto aproximado y nivel de urgencia.
                  </li>
                </ul>
              </li>
              <li className={styles.step_right_content_list_title}>
                Diagnostico + Propuesta preliminar
                <ul className={styles.step_right_content_list}>
                  <li>
                    Presentamos un diagnóstico + propuesta preliminar de la
                    solución
                  </li>
                  <li>
                    Enviamos un breve cuestionario o formulario para recopilar
                    más información.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className={styles.step}>
        <div className={styles.step_left}>
          <div className={styles.step_left_container}>
            <div className={styles.step_left_container_title}>Fase 2</div>
            <div className={styles.step_left_container_subtitle}>
              Convertimos la oportunidad en un proyecto firmado
            </div>
          </div>
        </div>
        <div className={styles.step_right}>
          <div className={styles.step_right_border}>
            <div className={styles.step_right_dot}></div>
          </div>
          <div className={styles.step_right_container}>
            <div className={styles.step_right_container_title}>
              Propuesta y cierre
            </div>
            <ol>
              <li className={styles.step_right_content_list_title}>
                Análisis de datos y diagnóstico
                <ul className={styles.step_right_content_list}>
                  <li>
                    Revisamos todo la información enviada junto con el feedback
                    sobre la propuesta preliminar.
                  </li>
                  <li>
                    Detectamos cuellos de botella, procesos repetitivos, áreas
                    donde IA puede aportar.
                  </li>
                </ul>
              </li>
              <li className={styles.step_right_content_list_title}>
                Diseño de propuesta final
                <ul className={styles.step_right_content_list}>
                  <li>Alcance del proyecto (qué se hará, qué no se hará).</li>
                  <li>Beneficios tangibles y métricas esperadas.</li>
                  <li>Cronograma de implementación.</li>
                  <li>Definimos cual sera el modelo de precios.</li>
                  <li>Definimos como y donde almacenar la información.</li>
                </ul>
              </li>
              <li className={styles.step_right_content_list_title}>
                Reunión de propuesta
                <ul className={styles.step_right_content_list}>
                  <li>Presentamos el plan con enfoque en resultados y ROI.</li>
                  <li>Respondemos dudas técnicas y de negocio.</li>
                  <li>
                    Negociamos y cerramos con contrato y pago inicial (reserva).
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className={styles.step}>
        <div className={styles.step_left}>
          <div className={styles.step_left_container}>
            <div className={styles.step_left_container_title}>Fase 3</div>
            <div className={styles.step_left_container_subtitle}>
              Entregamos resultados rápidos y medibles.
            </div>
          </div>
        </div>
        <div className={styles.step_right}>
          <div className={styles.step_right_border}>
            <div className={styles.step_right_dot}></div>
          </div>
          <div className={styles.step_right_container}>
            <div className={styles.step_right_container_title}>
              Ejecución e implementación
            </div>
            <ol>
              <li className={styles.step_right_content_list_title}>
                Kick-off
                <ul className={styles.step_right_content_list}>
                  <li>Reunión de inicio con todos los involucrados.</li>
                  <li>Definir roles, canales de comunicación y entregables.</li>
                  <li>Accesos a sistemas y datos.</li>
                </ul>
              </li>
              <li className={styles.step_right_content_list_title}>
                MVP / Primer entrega rápida
                <ul className={styles.step_right_content_list}>
                  <li>
                    Entregamos un resultado parcial rápido (en 1-2 semanas) para
                    generar feedback temprano.
                  </li>
                </ul>
              </li>
              <li className={styles.step_right_content_list_title}>
                Implementación completa
                <ul className={styles.step_right_content_list}>
                  <li>Desarrollamos la solución por completo.</li>
                  <li>Consultamos en caso de dudas.</li>
                  <li>Generamos las pruebas end-to-end y unit testing.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className={styles.step}>
        <div className={styles.step_left}>
          <div className={styles.step_left_container}>
            <div className={styles.step_left_container_title}>Fase 4</div>
            <div className={styles.step_left_container_subtitle}>
              Entrega de la solución, feedback y posibles mejoras.
            </div>
          </div>
        </div>
        <div className={styles.step_right}>
          <div className={styles.step_right_border}>
            <div className={styles.step_right_dot}></div>
          </div>
          <div className={styles.step_right_container}>
            <div className={styles.step_right_container_title}>
              Entrega final, feedback y mejoras
            </div>
            <ol>
              <li className={styles.step_right_content_list_title}>
                Entrega final y validación
                <ul className={styles.step_right_content_list}>
                  <li>Revisar objetivos iniciales y mostrar resultados.</li>
                  <li>Ajustes finales.</li>
                </ul>
              </li>
              <li className={styles.step_right_content_list_title}>
                Capacitación y handover
                <ul className={styles.step_right_content_list}>
                  <li>
                    Generamos la documentación de procesos para que el cliente
                    entienda y pueda usar la solución.
                  </li>
                  <li>
                    Entrenamos a tu equipo para que sepa usar la solución.
                  </li>
                  <li>Confirmamos que todos sepan usar la solución.</li>
                </ul>
              </li>
              <li className={styles.step_right_content_list_title}>
                Soporte
                <ul className={styles.step_right_content_list}>
                  <li>Mejoras continuas.</li>
                  <li>Mantenimiento de la solución.</li>
                  <li>Soporte técnico 24/7.</li>
                  <li>Soluciones de errores (bugs).</li>
                  <li>Informes de resultados (mensuales o trimestrales).</li>
                </ul>
              </li>
              <li className={styles.step_right_content_list_title}>
                Upselling y expansión
                <ul className={styles.step_right_content_list}>
                  <li>Ofrecemos nuevos módulos o integraciones.</li>
                  <li>
                    Recomendamos revisiones semanales o mensuales para detectar
                    nuevas oportunidades.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
